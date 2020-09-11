import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../servicios/http/usuario.service';

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  arregloUsuarios = [];

  constructor(
    private readonly _usuarioService: UsuarioService
  ) {

  }

  ngOnInit(): void {
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (usuarios: any[]) => {
          this.arregloUsuarios = usuarios;
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

}
