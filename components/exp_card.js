import styled from "styled-components";
import style from "../styles/Exps.module.css";

const Exp_Card = styled.div`
    position: relative;
    top: ${props => props.top};
    width: 100%;
    max-width: 450px;
    perspective: 400px;
    
    .c_card {
        min-height: 390px;
        transition: all 0.8s;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    
        border-radius: 16px;
        background: linear-gradient(180deg, #F9DCDC 0%, rgba(225, 167, 165, 0) 72.4%);
        box-shadow: 0 -10px 8px #0B0B0B;
    
        transform: rotateX(-1deg);
    }
    
    .c_card::before {
        content: "";
        position: absolute;
        top: 0; right: 0; left: 0; bottom: 0;
        background: linear-gradient(0deg, #111111 19.47%, #171717 98.68%);
        margin: 2px;
        border-radius: 15px;
    }
    
    .c_card_deck {
        display: none;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 240px;
        max-width: 500px;
    }
    
    .card_deck_hr {
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, #111111, #FDB7B7 35%, #F9DCDC 50%, #FDB7B7 65%, #111111);
        box-shadow: 0 -2px 5px #252525, 0 2px 5px #000000;
        margin: 0;
        border: transparent;
    }
    
    .card_deck_hidder {
        background-color: #111111;
        height: 100%;
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
        width: 180px;
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
        gap: 10px 10px;
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
      <Exp_Card >
            <div className={style.c_card}>
                <div className={style.card_content}>

                    <img className={style.img} src={props.src_logo} alt={props.alt_logo}/>

                    <div className={style.c_title}>
                        <h3 className={style.h3}>{props.title}</h3>
                        <hr className={style.hr} />
                        <h3 className={style.h3}>{props.subtitle}</h3>
                    </div>
                    <p className={style.p}>{props.description}</p>

                    <div className={style.c_list_technos}>{
                            props.technos_list.map((item) => {
                                return <p>{item}</p>
                            })
                        }
                    </div>
                </div>
            </div>
      </Exp_Card>
  );
};

export default Exp_card;