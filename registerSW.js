if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/react-chat-pwa/sw.js', { scope: '/react-chat-pwa/' })})}