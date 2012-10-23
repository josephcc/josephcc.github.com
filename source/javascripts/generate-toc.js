function generateTOC(insertHead, target, heading) {
  var container = jQuery("<section id='tocBlock'></section>");
  var div = jQuery("<ul id='toc'></ul>");
  var content = $(target).first();

  if (heading != undefined && heading != null) {
    container.append('<h1>' + heading + '</h1>');
  }

  div.tableOfContents(content);
  div = div.children('li').first().children('ul').first();
  div2 = jQuery("<ol style='margin-left: 1.3em;'></ol>")
  div2.append(div.html());
  container.append(div2);
  $(insertHead).prepend(container);
}
