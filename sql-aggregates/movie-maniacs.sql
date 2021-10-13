select "customers"."firstName",
      "customers"."lastName",
      sum("payments"."amount") as "totalAmount"
  from "customers"
  join "payments" using ("customerId")
group by "customers"."customerId"
order by "totalAmount" desc

--List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending.
