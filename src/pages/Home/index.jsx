import { FiPlus, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Movies } from "../../components/Movie";

import { Container, Content } from "./styles";

export function Home() {
   return (
      <Container>
         <Header />

         <Content>
            <Section title="Meus Filmes">
               <Button to="/new-movie" icon={FiPlus} title="Adicionar Filme" />
            </Section>

            <Movies data={{
               title: "Interestelar",
               description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!",
               rating: 4,
               tags: [
                  { id: "1", name: "ação" },
                  { id: "2", name: "comédia" }
               ]
            }}
            />

            <Movies data={{
               title: "Interestelar",
               description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!",
               rating: 3,
               tags: [
                  { id: "1", name: "ação" },
                  { id: "2", name: "comédia" }
               ]
            }}
            />

            <Movies data={{
               title: "Interestelar",
               description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!",
               rating: 5,
               tags: [
                  { id: "1", name: "ação" },
                  { id: "2", name: "comédia" }
               ]
            }}
            />

            <Movies data={{
               title: "Interestelar",
               description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!",
               rating: 5,
               tags: [
                  { id: "1", name: "ação" },
                  { id: "2", name: "comédia" }
               ]
            }}
            />

            <Movies data={{
               title: "Interestelar",
               description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo animi libero obcaecati deserunt fuga quae beatae tempore aliquid provident suscipit voluptate, ab quaerat pariatur at modi fugiat in nostrum!",
               rating: 5,
               tags: [
                  { id: "1", name: "ação" },
                  { id: "2", name: "comédia" }
               ]
            }}
            />
         </Content>
      </Container>
   )
}