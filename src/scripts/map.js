import '/source/styles/styleMap.css';

let maps = document.querySelector('#map');

let iframe = document.createElement('iframe');
iframe.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63252.14515962143!2d27.59535414597395!3d53.90292384772611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1624611767122!5m2!1sru!2sby");
iframe.setAttribute('width', '100%');
iframe.setAttribute('height', '100%');
iframe.style.border = 'none';
maps.append(iframe);

let markers = document.createElement('script');
markers.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=AIzaSyDfkRDgZsgxKYS5UNpB_zUnKIKR3oHkPuM&callback=initMap&libraries=&v=weekly");
markers.setAttribute('async', '');
maps.append(markers);