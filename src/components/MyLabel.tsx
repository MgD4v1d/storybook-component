import './mylabel.css';

export interface MyLabelProps {
    /**
     * Define que si la etiqueta esta capitalizada
     */
    allCaps?: boolean;
    /**
     * Define el color de fonde de la etiqueta
     */
    backgroundColor?:string;
    /**
     * Define el color del texto de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Define cualquier color a la fuente en la etiqueta
     */
    fontColor?: string;
    /**
     * Este es el mesaje que se mostrará en la etiqueta
     */
    label: string;
    /**
     *  Este el el tamaño por defecto de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    
}

/**
 * Basic UI Label component for user interaction
 */
export const MyLabel = ( { 
    allCaps = false,
    color   = 'primary',
    label   = 'No label',
    size    = 'normal',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps ) => {
  return (
    <span 
        className={`label ${size} text-${color}`} 
        style={{ color: fontColor, backgroundColor }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}


export default MyLabel;