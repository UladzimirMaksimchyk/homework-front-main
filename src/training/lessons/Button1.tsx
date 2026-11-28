
type ButtonType={
    title: string
    onClick?: () => void
}

export const Button1 = ({title,onClick}:ButtonType) => {

    const onClickHandler=()=>{
        return {onClick}
    }

    return (
        <button onClick={onClickHandler}> {title}</button>
    );
};
