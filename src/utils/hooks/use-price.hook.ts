interface PriceProps {
  price: number;
  currency?: string;
  locale?: string;
}

export const usePrice = ({
  price,
  currency = "€",
  locale = "es-ES",
}: PriceProps) => {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency === "€" ? "EUR" : currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  }).format(price);

  return formattedPrice;
};
