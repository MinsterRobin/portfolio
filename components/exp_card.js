import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const Exp_Card = styled.div`
    width: 100%;
    max-width: 450px;
    perspective: 400px;
    
    .c_card {
        min-height: 390px;
        transition: all 0.8s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    
        border-radius: 16px;
        background: linear-gradient(180deg, #F9DCDC 0%, rgba(225, 167, 165, 0) 72.4%);
        box-shadow: 0 -10px 8px #0B0B0B;
    
        transform: rotateX(-1deg);
    }
    
    .c_card:hover {
        transform: scale(1.02, 1.02) translate(0, -240px) rotateX(1deg);
    }
    
    .c_card::before {
        content: "";
        position: absolute;
        top: 0; right: 0; left: 0; bottom: 0;
        background: linear-gradient(0deg, #111111 19.47%, #171717 98.68%);
        margin: 2px;
        border-radius: 15px;
    }
   
    .card_content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px;
        gap: 18px;
    }
    
    .img {
        max-width: 180px;
        max-height: 50px;
    }
    
    .c_title {
        display: flex;
        flex-direction: column;
    }
    
    .h3 {
        font-size: 20px;
        font-weight: 500;
        margin: 0;
    }
    
    .hr {
        width: 150px;
    }
    
    .p {
        font-size: 16px;
        font-weight: 300;
        margin: 0;
    }
    
    .c_list_technos {
        display: flex;
        flex-wrap: wrap;    
        justify-content: center;
        gap: 10px;
        max-width: 300px;
    }
    
    .c_list_technos > p {
        margin: 0;
        font-size: 16px;
        font-weight: 300;
        text-decoration: underline;
    }
`;

const Exp_card = (props) => {
  return (
      <Exp_Card>
            <div className="c_card">
                <div className="card_content">

                    <img className="img" src={props.src_logo} alt={props.alt_logo}/>

                    <div className="c_title">
                        <h3 className="h3">{props.title}</h3>
                        <hr className="hr" />
                        <h3 className="h3">{props.subtitle}</h3>
                    </div>
                    <p className="p">{props.description}</p>

                    <div className="c_list_technos">
                        {props.technos_list.map((item) => {
                            return <p key={uuidv4()}>{item}</p>
                        })}
                    </div>
                </div>
            </div>
      </Exp_Card>
  );
};

export default Exp_card;