import React from 'react'
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = () => {

  const OPCIONES = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Bussines'},
    {value: 'entertainment', label: 'Entertainment'},
    {value: 'health', label: 'Health'},
    {value: 'science', label: 'Science'},
    {value: 'sports', label: 'Sports'},
    {value: 'technology', label: 'Technology'}
  ];

  const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h2 className={styles.heading}>Search news by category</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              id="autocomplete-input"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;