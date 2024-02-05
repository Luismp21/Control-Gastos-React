import Gasto from './Gasto';

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  elminarGastos,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? 'Gastos'
              : 'No hay Gastos en esta Categoría'}
          </h2>
          {gastosFiltrados.map((gasto) => {
            return (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                elminarGastos={elminarGastos}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2>{gastosFiltrados.length ? 'Gastos' : ''}</h2>
          {gastos.map((gasto) => {
            return (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                elminarGastos={elminarGastos}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
