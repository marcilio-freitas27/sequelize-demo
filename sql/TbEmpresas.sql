--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 12.3

-- Started on 2022-04-03 12:34:52

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- TOC entry 199 (class 1259 OID 82172)
-- Name: empresas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.empresas (
    cnpj character varying(255) NOT NULL,
    nome character varying(255) NOT NULL,
    representante_legal character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    telefone character varying(255) NOT NULL,
    endereco character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.empresas OWNER TO postgres;

--
-- TOC entry 2799 (class 0 OID 82172)
-- Dependencies: 199
-- Data for Name: empresas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.empresas (cnpj, nome, representante_legal, email, telefone, endereco, "createdAt", "updatedAt") FROM stdin;
20211234560404	Empresario	TesteEmpresa	empresa@email.com	8432722535	Rua do Dev	2021-10-15 11:26:16.764-03	2021-10-15 11:26:16.764-03
20211148070017	Empresa	Empresa02	email@email.com	8432728893	rua do ti	2022-02-05 17:51:29.88-03	2022-02-05 17:51:29.88-03
12345678901234	Teste	Doido Maluco	empresa@email.com	8432725589	rua do fone	2022-03-31 14:00:18.996-03	2022-03-31 14:05:28.362-03
\.


--
-- TOC entry 2677 (class 2606 OID 82179)
-- Name: empresas empresas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresas
    ADD CONSTRAINT empresas_pkey PRIMARY KEY (cnpj);


-- Completed on 2022-04-03 12:34:53

--
-- PostgreSQL database dump complete
--

