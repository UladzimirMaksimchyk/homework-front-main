type ButtonPropsType = {
  callBack: ()=> void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = ({callBack, name}: ButtonPropsType) => {
  return (
    <button id={'hw04-button'} onClick={callBack}>
      {name}
    </button>
  );
};

