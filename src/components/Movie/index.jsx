import { Tag } from "../Tag"

import { IoMdStar, IoMdStarOutline } from "react-icons/io";

import { Container } from "./styles"

export function Movies({ data, ...rest }) {

   const renderStars = (rating) => {
      const totalStars = 5;
      const stars = [];
      for (let i = 0; i < totalStars; i++) {
         if (i < rating) {
            stars.push(<IoMdStar key={i} />);
         } else {
            stars.push(<IoMdStarOutline key={i} />);
         }
      }
      return stars;
   };

   return (
      <Container {...rest}>
         <h1>
            {data.title}
         </h1>

         <div className="rating">
            {renderStars(data.rating)}
         </div>

         <p>
            {data.description}
         </p>

         {
            data.tags &&
            <footer>
               {
                  data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
               }
            </footer>
         }
      </Container>
   )
}