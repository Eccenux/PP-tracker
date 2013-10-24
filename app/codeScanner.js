/**
 * Result passed to onSuccess function.
 * 
 * This is purely for docs, code completition and mocking.
 * 
 * @class {CodeScannerResult}
 */
function CodeScannerResult()
{
	/**
	 * Resulting code.
	 * @type String
	 */
	this.text = '12345-mock';
	/**
	 * Code format.
	 * @type String
	 */
	this.format = 'MOCK';
	/**
	 * Was canceled.
	 * @type Boolean
	 */
	this.cancelled = false;
}

/**
 * Simple mock-class for the BarcodeScanner PhoneGap Plugin.
 *
 * Docs:
 * <li> Plugins Basics: https://build.phonegap.com/docs/plugins-using
 * <li> BarcodeScanner usage: https://github.com/wildabeast/BarcodeScanner/blob/master/README.md
 * <li> BarcodeScanner types and functions: https://github.com/phonegap/phonegap-plugins/tree/master/iOS/BarcodeScanner
 * 
 * @note You will need to add script call to your index.html. Plugin/phonegap.js files are injected automatically by PGB.
 * 	<!-- plugin(s) -->
 * 	<!-- phonegap.js = cordova.js (file is injected automatically) -->
 * 	<script src="phonegap.js"></script>
 * 	<script src="barcodescanner.js"></script>
 *
 * Author: Maciej Jaros
 * Web: http://enux.pl/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *   GPL v3 http://opensource.org/licenses/GPL-3.0
 *
 * @class {CodeScanner}
 */
function CodeScanner()
{
	/**
	 * True if scanner is o be run in mocking mode.
	 * @type Boolean
	 */
	this.mockingEnabled = false;

	/**
	 * True if scanner is available.
	 *
	 * @readonly
	 * @type Boolean
	 */
	this.scannerAvailable = false;

	/**
	 * This is actualy a BarcodeScanner PhoneGap Plugin object. The type is for Netbeans.
	 * @type CodeScanner
	 */
	var scanner = null;
	
	/**
	 * Scanner initialization.
	 *
	 * Should be called before scanning.
	 * @returns {Boolean} true If scanner is available.
	 */
	this.init = function()
	{
		// various versions just in case...
		if ('plugins' in window && 'barcodeScanner' in window.plugins) {
			scanner = window.plugins.barcodeScanner;
		}
		else if ('barcodeScanner' in window) {
			scanner = window.plugins.barcodeScanner;
		}
		else if ('cordova' in window) {
			// barcodeScanner 1.0
			if ('plugins' in cordova && 'barcodeScanner' in cordova.plugins) {
				scanner = cordova.plugins.barcodeScanner;
			// barcodeScanner 0.7
			} else {
				scanner = cordova.require("cordova/plugin/BarcodeScanner");
			}
		}

		// ready?
		if (scanner != null) {
			this.scannerAvailable = true;
			this.mockingEnabled = false;
		}

 		// mock
		if (this.mockingEnabled) {
			this.scannerAvailable = true;
		}
		return this.scannerAvailable;
	};
	
	/**
	 * Read code from scanner
	 *
	 * @param {Function} onSuccess
	 * @param {Function} onError
	 * @returns {Boolean} true If scan was started, false if scanner is unavailable.
	 */
	this.scan = function(onSuccess, onError)
	{
		// make sure init was run
		if (!this.scannerAvailable) {
			this.init();
			if (!this.scannerAvailable) {
				return false;
			}
		}

		// mock
		if (this.mockingEnabled) {
			onSuccess(new CodeScannerResult());
			return;
		}

		// std. scan
		scanner.scan(
			/**
			 * Success.
			 * @param {CodeScannerResult} result
			 */
			function(result)
			{
				onSuccess(result);
			}
			,
			/**
			 * Fail.
			 * @param {String} error
			 */
			function(error)
			{
				if (typeof (onError) == "function") {
					onError(error);
				}
			}
		);
	};
}
window.codeScanner = new CodeScanner();