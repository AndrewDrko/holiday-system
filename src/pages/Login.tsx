// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style/fonts.css';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { HiOutlineEye } from 'react-icons/hi2';
import { HiOutlineEyeSlash } from 'react-icons/hi2';

// import './styles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import { useState } from 'react';

const StyledSwiper = styled(Swiper)`
  position: relative;
  & img {
    filter: brightness(50%);
    display: block;
    width: 100%;
    height: 100vh;
  }
`;

const LoginContainer = styled.div`
  /* display: flex;
  justify-content: space-between; */
  gap: 5rem;
  font-size: 2rem;
  /* width: 70rem; */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 60rem;

  border-radius: 12px;
  padding: 5rem;
  box-shadow: var(--shadow-md);
  /* background: linear-gradient(to right top, #572121, #82292a, #92292a, #a32929, #b32828); */
  /* background-image: linear-gradient(
    to right top,
    #2e2424,
    #4b2424,
    #672222,
    #811d1d,
    #9b1313
  ); */

  background-color: var(--color-grey-300);

  color: black;

  z-index: 99;

  /* @media (max-width: 37.5em) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
  } */
`;

const SectionsContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  justify-content: space-around;
`;

const SectionsContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const TextBox = styled.input`
  border: none;

  background-color: transparent;
  color: black;
  letter-spacing: 0.7px;
  padding: 0.4rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const TextFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid var(--color-grey-400);
  margin-bottom: 2rem;

  & svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-grey-500);
    transition: all 0.2s;
  }
`;

const EyeContainer = styled.div`
  cursor: pointer;

  & svg:hover {
    color: var(--color-grey-700);
  }
`;

const Image = styled.img`
  width: 20rem;
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.459));
`;

const Labels = styled.label`
  font-weight: bold;
`;

const ButtonSubmit = styled.button`
  margin-top: 2rem;
  background-color: var(--color-red-700);
  color: var(--color-grey-200);
  border: none;
  padding: 0.7rem;

  &:hover {
    background-color: var(--color-red-800);
  }
`;

const Slogan = styled.blockquote`
  font-family: 'Brunshscn', sans-serif;
  font-size: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 5rem;
`;

export default function App() {
  const [isClicked, setClicked] = useState(false);
  return (
    <>
      <LoginContainer>
        <SectionsContainerLeft>
          <Image src="Logo-dai.png" />
          <Slogan>¡ Tu Soporte en el Camino !</Slogan>
          <Title>¡Bienvenido!</Title>
        </SectionsContainerLeft>
        <SectionsContainerRight>
          <h2>Iniciar Sesión</h2>
          <Labels>Usuario</Labels>
          <TextFieldContainer>
            <TextBox
              title="Completa este campo"
              type="text"
              placeholder="Ingrese su usuario"
              required
            ></TextBox>
            <HiOutlineUserCircle />
          </TextFieldContainer>
          <Labels>Contraseña</Labels>
          <TextFieldContainer>
            <TextBox
              title="Completa este campo"
              type={isClicked ? 'text' : 'password'}
              placeholder="Ingrese su contraseña"
              required
            ></TextBox>
            <EyeContainer
              title={isClicked ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
              onClick={() => setClicked(!isClicked)}
            >
              {isClicked ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
            </EyeContainer>
          </TextFieldContainer>
          <ButtonSubmit>Ingresar</ButtonSubmit>
        </SectionsContainerRight>
      </LoginContainer>
      <StyledSwiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./daiphotos/photo1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./daiphotos/photo2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./daiphotos/photo3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./daiphotos/photo4.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./daiphotos/photo5.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./daiphotos/photo6.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./daiphotos/photo7.jpeg" />
        </SwiperSlide>
      </StyledSwiper>
    </>
  );
}

// const Login = () => {
//   return (
//     <div>
//       <h1>login</h1>
//     </div>
//   );
// };

// export default Login;
