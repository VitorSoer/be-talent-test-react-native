import * as S from './styles';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SeachBar';
import { DropdownCard } from '../../components/DropdownCard';
import { ListHeader } from '../../components/ListHeader';
import { Loading } from '../../components/Loading';
import { ListEmpty } from '../../components/ListEmpty';
import { getEmployees, IEmployees } from '../../services/employeesApi';

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [employees, setEmployees] = useState<IEmployees[]>([]);

  const fetchEmployeesData = async () => {
    try {
      setLoading(true);

      const { data } = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error at fetchEmployeesData: ', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEmployees = useMemo(() => {
    if (!searchTerm) return employees;

    return employees.filter(({ name, job, phone }) =>
      [name, job, phone].some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [employees, searchTerm]);

  useEffect(() => {
    fetchEmployeesData();
  }, []);

  if (loading) return <Loading />;

  return (
    <S.MainContainer>
      <Header />

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <FlatList
        data={filteredEmployees}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={ListEmpty}
        keyExtractor={({ id }) => id?.toString()}
        renderItem={({ item }) => (
          <DropdownCard
            name={item.name}
            role={item.job}
            startDate={item.admission_date}
            phone={item.phone}
            image={item.image}
          />
        )}
      />
    </S.MainContainer>
  );
};
