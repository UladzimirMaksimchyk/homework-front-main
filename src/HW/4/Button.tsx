type ButtonPropsType = {
  callBack: ()=> void // НУЖНО ПРОТИПИЗИРОВАТЬ
  names: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = ({callBack, names}: ButtonPropsType) => {
  return (
    <button id={'hw04-button'} onClick={callBack}>
      {names}
    </button>
  );
};

