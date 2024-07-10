import { RiShutDownLine } from "react-icons/ri";

import { Input } from "../Input";

import { Container, Profile, Logout } from "./styles";

export function Header() {
   return (
      <Container>

         <Logout>
            RocketMovies
         </Logout>

         <Input placeholder="Pesquisar por título" />

         <Profile to="/register">
            <div>
               <strong>Fhylipe Adan</strong>
               <span>Sair</span>
            </div>

            <img
               src="https://github.com/FhylipeA.png"
               alt="Foto de perfil do usuário"
            />

         </Profile>

      </Container>
   )
}