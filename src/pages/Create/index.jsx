import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { MovieItem } from "../../components/MovieItem"
import { TextArea } from "../../components/TextArea"

import { Container, Section, Form } from "./styles";

export function Create() {

   return (
      <Container>

         <Header />

         <Section>
            <Link to="/">
               <FiArrowLeft />
               Voltar
            </Link>

            <h1>Novo filme</h1>

            <Form>
               <div className='info'>
                  <Input placeholder="Título" />
                  <Input placeholder="Sua nota (de 0 a 5)" />
               </div>

               <div className='desc'>
                  <TextArea placeholder="Sinopse" />
               </div>

               <section>
                  <h3>Tags</h3>
                  <div>
                     <MovieItem value="Ficção" />
                     <MovieItem isNew placeholder="Nova tag" />
                  </div>
               </section>

               <footer>
                  <button className='exclude'>Excluir filme</button>
                  <button className='save'>Salvar alterações</button>
               </footer>
            </Form>

         </Section>
      </Container>
   )
}