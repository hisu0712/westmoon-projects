class ARButton {

	static createButton(renderer, sessionInit = {}, menu) {

		 //const button = document.createElement( 'button' );
		 const buttonStart = document.getElementById(menu);
		 const buttons = document.getElementById("local-nav");
		 const buttons2 = document.getElementById("ARBefore");
		 const buttonEnd = document.getElementById("button-end");
		 const ARcontent = document.getElementById("main");

		 function showStartAR( /*device*/ ) {
				let currentSession = null;

				function onSessionStarted( session ) {
					 session.addEventListener( 'end', onSessionEnded );
					 renderer.xr.setReferenceSpaceType( 'local' );
					 buttons.style.display = 'none';
					 buttons2.style.display = 'none';
					 ARcontent.style.display = 'flex';
					 renderer.xr.setSession( session );
					 currentSession = session;
				}

				function onSessionEnded( /*event*/ ) {
					 currentSession.removeEventListener( 'end', onSessionEnded );
					 buttons.style.display = 'block';
					 buttons2.style.display = 'flex';
					 ARcontent.style.display = 'none';
					 currentSession = null;
				}

				if(currentSession === null){
					 navigator.xr.requestSession( 'immersive-ar', sessionInit ).then( onSessionStarted );
				}

				buttonEnd.onclick = () => {
					 if(currentSession) currentSession.end();
				}
		 }

		 function showARNotSupported() {
				buttonStart.textContent = 'AR NOT SUPPORTED';
		 }

		 if ( 'xr' in navigator ) {
				navigator.xr.isSessionSupported( 'immersive-ar' ).then( (supported) => {
					 supported ? showStartAR() : showARNotSupported();
				}).catch( showARNotSupported );
		 }
		 else{
				const message = document.createElement( 'a' );
				if ( window.isSecureContext === false ) {
					 message.href = document.location.href.replace( /^http:/, 'https:' );
					 message.innerHTML = 'WEBXR NEEDS HTTPS'; // TODO Improve message
				} else {
					 message.href = 'https://immersiveweb.dev/';
					 message.innerHTML = 'WEBXR NOT AVAILABLE';
				}
				message.style.left = 'calc(50% - 90px)';
				message.style.width = '180px';
				message.style.textDecoration = 'none';
				stylizeElement( message );
				return message;
		 }
	}
}

export { ARButton };