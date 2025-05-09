
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { User } from '@/types';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, name: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users data (in a real app, this would be in a database)
const mockUsers = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    password: 'password123'
  }
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('furnitureUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Mock login request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const userData = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name
        };
        
        setUser(userData);
        localStorage.setItem('furnitureUser', JSON.stringify(userData));
        toast({
          title: "Login successful",
          description: `Welcome back, ${foundUser.name}!`,
        });
        navigate('/');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Invalid email or password",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login error",
        description: "An error occurred during login",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, name: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Mock signup request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      if (mockUsers.some(u => u.email === email)) {
        toast({
          variant: "destructive",
          title: "Signup failed",
          description: "Email is already in use",
        });
        return;
      }
      
      const newUser = {
        id: String(mockUsers.length + 1),
        email,
        name,
        password
      };
      
      // In a real app, we would send this to an API
      mockUsers.push(newUser);
      
      const userData = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      };
      
      setUser(userData);
      localStorage.setItem('furnitureUser', JSON.stringify(userData));
      
      toast({
        title: "Signup successful",
        description: `Welcome, ${name}!`,
      });
      
      navigate('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup error",
        description: "An error occurred during signup",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('furnitureUser');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
