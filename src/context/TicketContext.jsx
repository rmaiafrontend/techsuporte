import { createContext, useContext, useState, useEffect } from 'react';
import { tickets as initialTickets } from '../data/mockData';

const TicketContext = createContext();

export function useTickets() {
  return useContext(TicketContext);
}

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Simulate fetching data from an API
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setTickets(initialTickets);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch tickets');
        setIsLoading(false);
      }
    };
    
    fetchTickets();
  }, []);
  
  // Get a ticket by ID
  const getTicketById = (id) => {
    return tickets.find(ticket => ticket.id === Number(id)) || null;
  };
  
  // Create a new ticket
  const createTicket = (ticketData) => {
    const newTicket = {
      id: Math.max(0, ...tickets.map(t => t.id)) + 1,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      history: [
        {
          action: 'created',
          timestamp: new Date().toISOString(),
          user: ticketData.createdBy,
          comment: 'Ticket created'
        }
      ],
      ...ticketData
    };
    
    setTickets(currentTickets => [newTicket, ...currentTickets]);
    return newTicket;
  };
  
  // Update a ticket
  const updateTicket = (id, updatedData) => {
    setTickets(currentTickets => 
      currentTickets.map(ticket => {
        if (ticket.id === Number(id)) {
          // Create a history entry for status change if status is different
          let newHistory = [...ticket.history];
          
          if (updatedData.status && updatedData.status !== ticket.status) {
            newHistory.push({
              action: 'status-change',
              timestamp: new Date().toISOString(),
              user: updatedData.updatedBy || 'System',
              comment: `Status changed from '${ticket.status}' to '${updatedData.status}'${updatedData.comment ? '. ' + updatedData.comment : ''}`
            });
          }
          
          // Add comment to history if provided
          if (updatedData.newComment && !updatedData.status) {
            newHistory.push({
              action: 'comment',
              timestamp: new Date().toISOString(),
              user: updatedData.updatedBy || 'System',
              comment: updatedData.newComment
            });
          }
          
          // Remove fields that shouldn't be in the ticket object
          const { newComment, updatedBy, comment, ...cleanedData } = updatedData;
          
          return {
            ...ticket,
            ...cleanedData,
            updatedAt: new Date().toISOString(),
            history: newHistory
          };
        }
        return ticket;
      })
    );
  };
  
  // Delete a ticket
  const deleteTicket = (id) => {
    setTickets(currentTickets => 
      currentTickets.filter(ticket => ticket.id !== Number(id))
    );
  };
  
  // Filter tickets by different criteria
  const filterTickets = (filters) => {
    return tickets.filter(ticket => {
      let match = true;
      
      if (filters.status && filters.status !== 'all') {
        match = match && ticket.status === filters.status;
      }
      
      if (filters.category && filters.category !== 'all') {
        match = match && ticket.category === filters.category;
      }
      
      if (filters.priority && filters.priority !== 'all') {
        match = match && ticket.priority === filters.priority;
      }
      
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          ticket.title.toLowerCase().includes(searchLower) ||
          ticket.description.toLowerCase().includes(searchLower) ||
          ticket.createdBy.toLowerCase().includes(searchLower) ||
          (ticket.assignedTo && ticket.assignedTo.toLowerCase().includes(searchLower));
        
        match = match && matchesSearch;
      }
      
      return match;
    });
  };
  
  // Get ticket statistics
  const getTicketStats = () => {
    const totalTickets = tickets.length;
    const statusCounts = tickets.reduce((acc, ticket) => {
      acc[ticket.status] = (acc[ticket.status] || 0) + 1;
      return acc;
    }, {});
    
    const categoryCounts = tickets.reduce((acc, ticket) => {
      acc[ticket.category] = (acc[ticket.category] || 0) + 1;
      return acc;
    }, {});
    
    const priorityCounts = tickets.reduce((acc, ticket) => {
      acc[ticket.priority] = (acc[ticket.priority] || 0) + 1;
      return acc;
    }, {});
    
    return {
      totalTickets,
      statusCounts,
      categoryCounts,
      priorityCounts
    };
  };
  
  const value = {
    tickets,
    isLoading,
    error,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket,
    filterTickets,
    getTicketStats
  };
  
  return (
    <TicketContext.Provider value={value}>
      {children}
    </TicketContext.Provider>
  );
}