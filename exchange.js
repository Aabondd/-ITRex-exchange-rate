var uri = "https://www.nbrb.by/API/";

function ratestoday(p) {
  $.getJSON(uri + "ExRates/Rates", { Periodicity: p })
    .done(function (data) {
      $.each(data, function (key, item) {
        $(
          `<tr><td>${item.Cur_Name}</td><td>${item.Cur_Scale}</td><td>${item.Cur_OfficialRate}</td></tr>`,
          { text: JSON.stringify(item) }
        ).appendTo($("#res2"));
      });
      $("#btn").removeAttr("disabled");
    })
    .error(function (err) {
      $("#btn").removeAttr("disabled");
      alert("ошибка");
    });
}

ratestoday(0);
