interface TitleAndTextProps {
    title: string;
    text:string;
}

export default function TitleAndText(props: TitleAndTextProps) {
    const { title,
        text } = props;

    return (
        <div style={{display:'flex'}}>
            <h4 style={{margin:'5px'}}>{title}:  </h4>
            <span style={{margin:'5px'}}>{text}</span>
        </div>

    );
}

export { TitleAndText };
