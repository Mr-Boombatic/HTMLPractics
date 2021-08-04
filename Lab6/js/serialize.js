function serialize(form) {
  if (!form || form.nodeName !== "FORM")
    return false;

    var i, j, q = [];
    for (i = form.elements.length - 1; i >= 0; i--) {
      if (form.elements[i].name === "")
        continue;
      switch (form.elements[i].nodeName) {
        case 'INPUT':
          switch (form.elements[i].type) {
            case 'text':
            case 'email':
            case 'number':
            case 'button':
              q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value.toLowerCase()));
              break;
            case 'checkbox':
            case 'radio':
              if (form.elements[i].checked)
                q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
              break;
          }
          break;
        case 'SELECT':
          switch (form.elements[i].type) {
            case 'select-one':
              q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
              break;
            case 'select-multiple':
              for (j = form.elements[i].options.length - 1; i >= 0; j--) {
                if (form.elements[i].options[j].selected)
                  q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].options[j].value));
              }
              break;
            }
            break;
      }
    }
    return q.join("&");
}
