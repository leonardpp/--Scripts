if (model.cpf11 == "")
{

  let url = location.origin + '/solarbpm-integracao/interessado';
    let request = new XMLHttpRequest();
    request.responseType = 'json';
    let body =  
    {
        "endereco": {
          "cdMunicipio": 3505708,
          "deBairro": "Não informado",
          "nmLogradouro": "Não informado",
          "nuCep": 6401120,
          "nuNumero": 0
        },
        "nmInteressado": model.dados[0].nome,
        "nuCpfCnpj": model.dados[0].cpf,
        "tpInteressado": "F"
      }
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));
 
    request.onloadend = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {      
        console.log('Request Status: ', request.status);
        console.log(request.response);
      }
      if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {        
        console.log('Request Status: ', request.status);
      }
    };
 
   
    formFunctions.submitForm(form, model, context);
  }

  else if (model.cpf22 == "")
{

  let url = location.origin + '/solarbpm-integracao/interessado';
    let request = new XMLHttpRequest();
    request.responseType = 'json';
    let body =  
    {
        "endereco": {
          "cdMunicipio": 3505708,
          "deBairro": "Não informado",
          "nmLogradouro": "Não informado",
          "nuCep": 6401120,
          "nuNumero": 0
        },
        "nmInteressado": model.dados[1].nome,
        "nuCpfCnpj": model.dados[1].cpf,
        "tpInteressado": "F"
      }
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));
 
    request.onloadend = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {      
        console.log('Request Status: ', request.status);
        console.log(request.response);
      }
      if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {        
        console.log('Request Status: ', request.status);
      }
    };
    
 
   
    formFunctions.submitForm(form, model, context);
  }


  else if (model.cpf33 == "")
{

  let url = location.origin + '/solarbpm-integracao/interessado';
    let request = new XMLHttpRequest();
    request.responseType = 'json';
    let body =  
    {
        "endereco": {
          "cdMunicipio": 3505708,
          "deBairro": "Não informado",
          "nmLogradouro": "Não informado",
          "nuCep": 6401120,
          "nuNumero": 0
        },
        "nmInteressado": model.dados[2].nome,
        "nuCpfCnpj": model.dados[2].cpf,
        "tpInteressado": "F"
      }
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));
 
    request.onloadend = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {      
        console.log('Request Status: ', request.status);
        console.log(request.response);
      }
      if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {        
        console.log('Request Status: ', request.status);
      }
    }
  };

  