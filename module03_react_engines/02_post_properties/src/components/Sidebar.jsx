import { PencilLine } from "@phosphor-icons/react";

import styleSidebar from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styleSidebar.sidebar}>
      <img
        className={styleSidebar.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styleSidebar.profile}>
        <Avatar src="https://github.com/jogador.png" />

        <strong>Thiago Coelho</strong>
        <span>Developer Full Stack Web</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
