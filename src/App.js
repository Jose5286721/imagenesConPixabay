
import React from 'react'
import { Field } from 'react-final-form'
import Wizard from './Wizard'

const onSubmit = values => {
  console.log(values);
}
export default class App extends React.Component{ 
constructor(props){
  super(props);
  this.state = {query:'',resultado:{},mapeado:'',imgSeleccionada:''};
  this.handleChange = this.handleChange.bind(this); 
  this.handleBuscarImagen = this.handleBuscarImagen.bind(this);
  this.seleccionaImagen = this.seleccionaImagen.bind(this);
}
colocarURL(){
  var url = this.state.imgSeleccionada;
  var resultado = document.getElementById('resul');
  var re = this.state.resultado;
  var imagenes = document.getElementsByClassName('imagenes')
  var cadena = "[";
                re.map(function(valor,indice){
                    if(valor.largeImageURL == url){
                        cadena+=`<br/>&nbsp;&nbsp{`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"largeImageURL":&nbsp;"${valor.largeImageURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"webformatHeight":&nbsp;${valor.webformatHeight},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"webformatWidth":&nbsp;${valor.webformatWidth},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"likes":&nbsp;${valor.likes},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"imageWidth":&nbsp;${valor.imageWidth},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"id":&nbsp;${valor.id},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"user_id":&nbsp;${valor.user_id},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"views":&nbsp;${valor.views},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"comments":&nbsp;${valor.comments},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"pageURL":&nbsp;"${valor.pageURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"imageHeight":&nbsp;${valor.imageHeight},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"webformatURL":&nbsp;"${valor.webformatURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"type":&nbsp;"${valor.type}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"previewHeight":&nbsp;${valor.previewHeight},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"tags":&nbsp;"${valor.tags}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"downloads":&nbsp;${valor.downloads},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"user":&nbsp;"${valor.user}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"favorites":&nbsp;${valor.favorites},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"imageSize":&nbsp;${valor.imageSize},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"previewWidth":&nbsp;${valor.previewWidth},`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"userImageURL":&nbsp;"${valor.userImageURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"previewURL":&nbsp;"<a id='enlace' href='${valor.previewURL}'>${valor.previewURL}</a>"`;
                        cadena+=`<br/>&nbsp;&nbsp},`;
                    }
                    if(indice<imagenes.length-1 && valor.largeImageURL != url){
                        cadena+=`<br/>&nbsp;&nbsp{`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"largeImageURL":&nbsp;"${valor.largeImageURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"webformatHeight":&nbsp;"${valor.webformatHeight}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"webformatWidth":&nbsp;"${valor.webformatWidth}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"likes":&nbsp;"${valor.likes}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"imageWidth":&nbsp;"${valor.imageWidth}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"id":&nbsp;"${valor.id}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"user_id":&nbsp;"${valor.user_id}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"views":&nbsp;"${valor.views}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"comments":&nbsp;"${valor.comments}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"pageURL":&nbsp;"${valor.pageURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"imageHeight":&nbsp;"${valor.imageHeight}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"webformatURL":&nbsp;"${valor.webformatURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"type":&nbsp;"${valor.type}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"previewHeight":&nbsp;"${valor.previewHeight}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"tags":&nbsp;"${valor.tags}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"downloads":&nbsp;"${valor.downloads}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"user":&nbsp;"${valor.user}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"favorites":&nbsp;"${valor.favorites}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"imageSize":&nbsp;"${valor.imageSize}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"previewWidth":&nbsp;"${valor.previewWidth}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"userImageURL":&nbsp;"${valor.userImageURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"previewURL":&nbsp;"${valor.previewURL}"`;
                        cadena+=`<br/>&nbsp;&nbsp},`;
                    }else{
                        cadena+=`<br/>&nbsp;&nbsp{`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"largeImageURL":&nbsp;"${valor.largeImageURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"webformatHeight":&nbsp;"${valor.webformatHeight}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"webformatWidth":&nbsp;"${valor.webformatWidth}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"likes":&nbsp;"${valor.likes}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"imageWidth":&nbsp;"${valor.imageWidth}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"id":&nbsp;"${valor.id}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"user_id":&nbsp;"${valor.user_id}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"views":&nbsp;"${valor.views}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"comments":&nbsp;"${valor.comments}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"pageURL":&nbsp;"${valor.pageURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"imageHeight":&nbsp;"${valor.imageHeight}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"webformatURL":&nbsp;"${valor.webformatURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"type":&nbsp;"${valor.type}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"previewHeight":&nbsp;"${valor.previewHeight}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"tags":&nbsp;"${valor.tags}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"downloads":&nbsp;"${valor.downloads}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"user":&nbsp;"${valor.user}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"favorites":&nbsp;"${valor.favorites}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"imageSize":&nbsp;"${valor.imageSize}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"previewWidth":&nbsp;"${valor.previewWidth}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"userImageURL":&nbsp;"${valor.userImageURL}",`;
                        cadena+=`<br/>&nbsp;&nbsp;&nbsp;&nbsp"previewURL":&nbsp;"${valor.previewURL}"`;
                        cadena+=`<br/>&nbsp;&nbsp}`;
                    }
                });
                cadena+="<br/>]";
                resultado.innerHTML=cadena;
                resultado.scrollTop = document.getElementById('enlace').offsetTop-450;
}  
seleccionaImagen(e){
  e.preventDefault();
  this.setState({
    imgSeleccionada:e.target.src
  },(e)=>{
      this.colocarURL();
  });
}
handleChange(e){
  e.preventDefault();
  document.getElementById('resul').innerHTML=`{<br/>&nbsp;&nbsp;${e.target.value}<br/>}`;
  this.setState({
    query:e.target.value
  });
}
mapeaImagenes(e){
  var valores = e;
  var array = [];
  valores.map((valor)=>{
    array.push({previewURL: valor.previewURL,largeImageURL:valor.largeImageURL,width:valor.previewWidth,height:valor.previewHeight});
  });
  var mapea = array.map((valor,i) =>
    <a href="#" key={i}><img className="imagenes" src={valor.largeImageURL} width={valor.width} height={valor.height} onClick={this.seleccionaImagen}/></a>
  );
  this.setState({
    mapeado:mapea
  });

}
handleBuscarImagen(e){
  e.preventDefault();
  var res = new XMLHttpRequest();
  res.onload=()=>{
    var response = JSON.parse(res.responseText);
    if(response != undefined){
      this.setState({
        resultado:response.hits
      },()=>this.mapeaImagenes(response.hits));
    }
  }
  res.open('GET',`https://pixabay.com/api/?key=12530660-82222775e21c8cba9582ffbc2&q=${this.state.query}`,false);
  res.send();


}
render(){
  var resultado = this.state.resultado;
return(
  <>
  <div class="container">
   
    <Wizard
      onSubmit={onSubmit}
    >
      <Wizard.Page>
          <Field component="input" type="hidden" value={this.state.query}/>
          <Field
            name="imagen"
            component="input"
            type="text"
            placeholder="Introduzca aqui el nombre de la imagen"
          >
            {({input, meta}) => {
                return (
                    <input 
                        {...input}
                        {...meta}
                        value={this.state.query}
                        className="input-buscar"
                        onChange={this.handleChange}
                    />
            )}}
            </Field>
         <button className="boton-buscar" onClick={this.handleBuscarImagen} >Siguiente</button>
      </Wizard.Page>
      <Wizard.Page>
          {this.state.mapeado}
          <Field name="imagenSeleccionada" type="hidden" component="input" >
            {({input})=>{
                return(
                  <input 
                    {...input}
                    value={this.state.imgSeleccionada}
                  />
                )
            }}
          </Field>
      </Wizard.Page>
      <Wizard.Page>
        <div>
          <Field name="im" type="hidden" component="input" value="uno"/>
        <img src={this.state.imgSeleccionada} />
        </div>
      </Wizard.Page>
    </Wizard>
    </div>
    </>
)
}
}
