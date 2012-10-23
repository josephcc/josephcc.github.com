function generateTOC(insertHead, target, heading) {
  var container = jQuery("<section id='tocBlock'></section>");
  var div = jQuery("<ul id='toc'></ul>");
  var content = $(target).first();

  if (heading != undefined && heading != null) {
    container.append('<h1>' + heading + '</h1>');
  }

  div.tableOfContents(content);
  div = div.children('li').first().children('ul').first();
  container.append(div);
  $(insertHead).prepend(container);
}
