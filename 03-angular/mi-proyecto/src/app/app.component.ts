import {Component} from '@angular/core';
import {UsuarioService} from './servicios/http/usuario.service';

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';

  arregloPeliculas = [
    {
      id: 1,
      url: 'https://i.ytimg.com/vi/gn1pz0rnNHs/hqdefault.jpg',
      descripcion: 'Esta pelicula trata sobre la libertad',
      nombrePelicula: 'Libertad'
    },
    {
      id: 2,
      url: 'https://los40es00.epimg.net/los40/imagenes/2020/08/04/cinetv/1596531662_429948_1596533048_noticia_normal.jpg',
      descripcion: 'Pelicula de terror comun',
      nombrePelicula: 'HOST'
    },
    {
      id: 3,
      url: 'https://ep01.epimg.net/verne/imagenes/2019/01/15/mexico/1547520514_173827_1547524793_noticia_normal.jpg',
      descripcion: 'Comedia para todo el publico',
      nombrePelicula: 'Bitelchus'
    }
  ]

  arregloNumeros = [1, 2, 3]

  // Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }

  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          console.log(data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
  }

}
