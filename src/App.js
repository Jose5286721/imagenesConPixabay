
import React from 'react'
import { Field } from 'react-final-form'
import Wizard from './Wizard'
import TextField from '@material-ui/core/TextField'

const onSubmit = values => {
  alert(JSON.stringify(values,0,2));
}
const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    onChange={(event, value) => input.onChange(value)}
    errorText={meta.touched ? meta.error : ''}
  />
)
export default class App extends React.Component{ 
constructor(props){
  super(props);
  this.state = {query:'',resultado:{},mapeado:'',imgSeleccionada:''};
  this.handleChange = this.handleChange.bind(this); 
  this.handleBuscarImagen = this.handleBuscarImagen.bind(this);
  this.seleccionaImagen = this.seleccionaImagen.bind(this);
}  
seleccionaImagen(e){
  e.preventDefault();
  this.setState({
    imgSeleccionada:e.target.value
  },(e)=>{
      //this.colocarURL();
  });
}
handleChange(e){
  e.preventDefault();
  //document.getElementById('resul').innerHTML=`{<br/>&nbsp;&nbsp;${e.target.value}<br/>}`;
  console.log(e.target.value);
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
  <Field name="urlImagen" type="radio" value={valor.largeImageURL}>
  {({ input }) => {
    return (
      <>
        <label>
          <input
            name={input.name}
            type="radio"
            value={valor.largeImageURL}
            onChange={input.onChange}
            checked={input.checked}
            onClick={this.seleccionaImagen}
            hidden
          />
          <img
            className="imagenes"
            alt=""
            src={valor.previewURL}
          />
        </label>
      </>
    );
  }}
</Field>
    
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
      <br/><label className="label-buscar">Primer Nombre</label><br/>
      <Field name="primerNombre" component="input" className="input-buscar" placeholder="Introduzca nombre" type="text"/>
      <br/><br/><label className="label-buscar">Primer Apellido</label><br/>
      <Field name="primerApellido" component="input" className="input-buscar" placeholder="Introduzca apellido" type="text"/>
      </Wizard.Page>
          
      <Wizard.Page>
      <Field component="input" type="hidden" value={this.state.query}/>
         
      <Field name="imagen">
        {props => (
          <>
          <input
            name={props.input.name}
            value={props.input.value}
            onChange={props.input.onChange}
            onChangeCapture={this.handleChange}
            className="input-buscar"
          />
          </>
  )}
</Field>
            
         <button className="boton-buscar" onClick={this.handleBuscarImagen} >Buscar</button>
          {this.state.mapeado}
          <Field name="imagenSeleccionada" type="hidden" component="input" >
            {({input})=>(
                  <input 
                    {...input}
                    value={this.state.imgSeleccionada}
                  />
              )}
          </Field>
      </Wizard.Page>
      <Wizard.Page>
        <label className="label-buscar">Correo electronico</label>
        <Field className="input-buscar" type="mail" component="input" name="email" placeholder="Introduzca su correo electronico"/>
      </Wizard.Page>
    </Wizard>
    </div>
    </>
)
}
}
