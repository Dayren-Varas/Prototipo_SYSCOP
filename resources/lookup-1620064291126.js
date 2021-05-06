(function(window, undefined) {
  var dictionary = {
    "721fb5e6-34cb-41aa-a6aa-83e3dbbbae1d": "Certificado-Defunción-Ad",
    "d3d8b4f9-332c-43e4-88b3-823ace001947": "Pantalla 3",
    "94993288-8638-4e09-9fa1-990c18ce8fb0": "Paciente-Familiar",
    "e655328e-76e2-4a8b-a625-ab27e2d91608": "Alta-Administrativo",
    "6bacc79e-c8b3-4e87-a49f-ca29e8d55601": "Pantalla 4",
    "866397d3-7772-4070-b4e2-8b47c768e753": "H.C-Administrativo",
    "2af12d77-86ed-4c27-943e-73df42dd23fc": "H.C-Familiar",
    "cba3712d-ca33-411a-b93a-c404cff43e11": "Pantalla 2",
    "2f9f7c5e-fdc7-4b55-ba2e-98e995f839a7": "Alta-Familiar",
    "3c69e721-3dcb-4324-85a5-fb77be8f9c00": "Certificado-Defunción-Fam",
    "d31fe779-7285-4ebf-9768-970b3378ed1f": "Pantalla 5",
    "413863d9-117b-4e29-b332-370f9e3a802e": "Pantalla 6",
    "ef29f90b-027a-4aa3-b154-f8c7cdda5cbd": "CRUD-P.A",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Pantalla 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);