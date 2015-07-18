$(document).ready(function() {
  // fix menu when passed
  $('.masthead').visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
  });

  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');
 
  // configure error content in the searchbox
  $.fn.search.settings.error = {
    noResults   : 'Aradığınız kelimenin geçtiği yazılar filtrelenerek getirilecektir'
  };
  // 'NO RESULTS' prompt should be corrected

  // autocomplete content for search bar
  var content = [
    { title: 'Rekabet Hukuku' },
    { title: 'Ticaret Hukuku' },
    { title: 'Tahkim' },
    { title: 'Bankacılık Hukuku ve Sermaye Piyasaları' },
    { title: 'Marka ve Patent Hukuku' },
    { title: 'Birleşme Devralmalar ve Proje Finansmanı' },
    { title: 'Ceza Hukuku' },
    { title: 'Compliance (Uyum)' },
    { title: 'Enerji ve Tabii Kaynaklar Hukuku' },
    { title: 'Çevre ve İklim Değişikliği' },
    { title: 'Aile Hukuku' },
    { title: 'Sağlık Hukuku' },
    { title: 'İnsan Hakları' },
    { title: 'Sigorta Hukuku' },
    { title: 'Medya Hukuku' },
    { title: 'İdare Hukuku' },
    { title: 'Gayrimenkul Hukuku' },
    { title: 'Deniz ve Taşımacılık Hukuku' },
    { title: 'Vergi ve Gümrük Mevzuatı ' },
    { title: 'Elektronik Haberleşme Hukuku' },
    { title: 'Beyaz Yakalı Suçları ve Mesleki Sorumluluk' },
    { title: 'İnternet ve Kişisel Verilerin Korunması' },
    { title: 'Hukuk Piyasası' },
    { title: 'Editöryal' },
    { title: 'Küresel haberler' },
    { title: 'İş Hukuku' }
  ];

  // put autocomplete content into the search-bar id
  $('#search-bar').search({
    source: content
  });

  // stick the favourite menu to the right
  $(".sticky-content").stick_in_parent({
    offset_top: 60
  });

  // form validation
  $('.ui.form').form({
    fields: {
      email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'empty',
            prompt : 'Lütfen e-postanızı yazın'
          },
          {
            type   : 'email',
            prompt : 'Lütfen geçerli bir e-posta adresi yazın'
          }
        ]
      },
      password: {
        identifier  : 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Lütfen şifrenizi girin'
          },
          {
            type   : 'length[6]',
            prompt : 'Şifreniz en az 6 karakter olmalıdır.'
          }
        ]
      }
    }
  });


});