import './mylabel.css';

export interface Props{
    /**
     * Descripcion del label
     */
    label:string;
    /**
     * Tamaño del label
     */
    size:'normal'|'h1'|'h2'|'h3';
    /**
     * Label capitalizado
     */
    allCaps?:boolean;
    /**
     * Color del label
     */
    color?:'primary'|'secondary'|'tertiary';
    /**
     * Color personalizado del label
     */
    customColor?:string;
    /**
     * Color personalizado del fondo del label
     */
    backgroundColor?:string;

}

/**
 * UI component for user interaction
 */
export const MyLabel = ({
    label = 'no label',
    size = 'normal',
    allCaps = false ,
    color = 'primary',
    customColor = 'transparent',
    backgroundColor
}:Props) => {
  return (
      <span
          style={{color:customColor, backgroundColor}}
          className={`label ${size} text-${color}`}>
          {!allCaps ? label : label.toUpperCase()}
      </span>
  )
}
