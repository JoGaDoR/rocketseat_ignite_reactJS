import styleSidebar from "./Sidebar.module.css"

export function Sidebar(){
    return (
        <aside className={styleSidebar.sidebar}>
            <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styleSidebar.profile}>
                <strong>UserName</strong>
                <span>CARGO</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu
                </a>
            </footer>
        </aside>
    );
}