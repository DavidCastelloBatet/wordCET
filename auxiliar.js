/* crea objecte atributs */

class atributs {
  negreta() {
        /* utilitza if per afegir o treure clase si veure si existeix o no */
      if (document.getElementById('text_negrete').classList.contains('text_negrete')) {
          document.getElementById('text_negrete').classList.remove('text_negrete');
      } else {
          document.getElementById('text_negrete').classList.add('text_negrete');
      }
  }
}

/* activa clase atributs */
let atributs_texte = new atributs();

/* texte amb negrete treballant amb funcions*/
function f_text_negrete() {
   /* utilitza toggle per afegir o treure clase si existeix o no */
  document.getElementById('text_negrete').classList.toggle('text_negrete');
};