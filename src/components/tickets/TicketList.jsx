import { useState } from 'react';
import { useTickets } from '../../context/TicketContext';
import TicketCard from './TicketCard';
import TicketFilters from './TicketFilters';
import { FaFilter } from 'react-icons/fa';
import styles from './TicketList.module.css';

const TicketList = () => {
  const { tickets, isLoading, error, filterTickets } = useTickets();
  const [filters, setFilters] = useState({
    status: 'all',
    category: 'all',
    priority: 'all',
    search: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredTickets = filterTickets(filters);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  if (isLoading) {
    return <div className={styles.loading}>Carregando chamados...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Todos os Chamados</h2>
        <button 
          className={styles.filterToggle}
          onClick={toggleFilters}
        >
          <FaFilter />
          <span>Filtros</span>
        </button>
      </div>

      {showFilters && (
        <TicketFilters 
          filters={filters} 
          onChange={handleFilterChange} 
        />
      )}

      {filteredTickets.length > 0 ? (
        <div className={styles.grid}>
          {filteredTickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <p>Nenhum chamado encontrado com os filtros selecionados</p>
          <button 
            onClick={() => setFilters({
              status: 'all',
              category: 'all',
              priority: 'all',
              search: ''
            })}
            className="button secondary"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketList;