import { useEffect, useState } from "react";
import { Car, CarDetail } from "../types/carTypes";

export const useFetchCars = () => {
  const [data, setData] = useState<Car[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(`${import.meta.env.VITE_API_URL}/api/models/?format=json`)
      .then(response => response.json())
      .then(parsedData => setData(parsedData))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [])
  
  return { data, isLoading, error }
};

export const useFetchCarsDetails = (id?: string) => {
  const [data, setData] = useState<CarDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return setError('Ocurrio un error, por favor intentalo nuevamente')
    setIsLoading(true)
    fetch(`${import.meta.env.VITE_API_URL}/api/models/${id}?format=json`)
      .then(response => response.json())
      .then(parsedData => setData(parsedData))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [id])
  
  return { data, isLoading, error }
};
