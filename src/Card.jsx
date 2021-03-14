import './css/card.css'

const Card = (props) => {
  return (
    <>
      <div class="card_3d">
        <div class="face front">
          <h2>{props.front_h2}</h2>
        </div>
        <div class="face back">
          <h2>{props.back_h2}</h2>
        </div>
      </div>
    </>
  );
};

export default Card
