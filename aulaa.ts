enum TipoDeUsuario {
    Administrador,
    UsuarioComum,
    Convidado,
    
  }
  function verificarPermissao(usuario: TipoDeUsuario): void {
    if (usuario === TipoDeUsuario.Administrador) {
      // Realizar ações administrativas
    } else {
      // Acesso restrito para outros tipos de usuário
    
    }
  }
  