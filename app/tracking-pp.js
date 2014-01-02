/**
 * Tracking service implementation for Poczta Polska.
 *
 * @returns {TrackingService}
 */
function TrackingService(baseUrl) {
	var forbiddenTags = /<(script|object|iframe|embed|link)(\s+[^>]+)?>[\s\S]*?<\/\1>/gi;
	var forbiddenInline = /<(script|object|iframe|embed|link)[^>]*>/gi;
	var forbiddenAttributes = /\s(on\w+|style)\s*=\s*(?:\w+|(["']).*?\2)/gi;
	var _self = this;
	
	/**
	 * Append mail-me info to i18n text.
	 *
	 * @param {String} txt Translated text.
	 */
	function withMailMe(txt) {
		return txt + ' Jeśli problem się powtórzy <a href="mailto:eccenux@gmail.com?subject=pp-tracker-bug&body=' + encodeURIComponent(txt) + '">napisz do mnie</a>.';
	}
	
	var i18n = {
		'connection error' : withMailMe('Błąd połączenia z serwerem.'),
		'code not found' : withMailMe('Błąd odczytu podstawowych danych.'),
		'loading info problem' : withMailMe('Błąd odczytu danych.'),
		'':''
	};
	
	/**
	 * This should make HTML safe for inserting as HTML.
	 *
	 * @param {String} html HTML to be transformed.
	 */
	function makeSafeHtml(html) {
		return html
			.replace(forbiddenTags, '')
			.replace(forbiddenInline, '')
			.replace(forbiddenAttributes, '')
		;
	}
	
	function reject(deferredExec, i18nCode) {
		deferredExec.reject(i18n[i18nCode]);
	}
	
	/**
	 * Returns info by referer based on \a code.
	 * 
	 * @param {String} code Package code.
	 * @returns {jQuery.Deferred} Object on which done/fail/always can be call to wait for result.
	 */
	this.getInfo = function (code) {
		var deferredExec = new jQuery.Deferred ();
		
		jQuery.ajax({
			url: baseUrl, dataType:'html',
			cache: true
		})
		.done(function(html) {
			var serviceCode = '';
			//console.log(html);
			html.replace(/data\s*:[\s{(]+\s*s\s*:\s*['"](\w+)['"]/, function(a, code) {
				serviceCode = code;
			});
			if (serviceCode.length) {
				jQuery.ajax({
					type: "POST",
					cache: true,
					url: baseUrl + "wssClient.php",
					data: { s:serviceCode, n:code }
				})
				.done(function(html) {
					//console.log(html);
					deferredExec.resolve(makeSafeHtml(html));
				})
				.fail(function() {
					reject(deferredExec, 'loading info problem');
				});
			}
			else {
				reject(deferredExec, 'code not found');
			}
		})
		.fail(function() {
			reject(deferredExec, 'connection error');
		});

		return deferredExec;
	};
}

/* test *
//window.ppTrackingService = new TrackingService('http://sledzenie.poczta-polska.pl/');
window.ppTrackingService = new TrackingService('http://m.enux.pl.l/pp-tracker/cors.php?server=pp&url=');
ppTrackingService.getInfo('123')
.done(function(html) {
	console.log(html);
})
.fail(function(info) {
	console.log('caught fail: ' + info);
});
/* test */