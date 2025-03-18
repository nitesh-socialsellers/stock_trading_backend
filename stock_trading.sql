PGDMP      ,                }            stock_trading    15.2    16.4     $           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            %           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            &           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            '           1262    32455370    stock_trading    DATABASE     �   CREATE DATABASE stock_trading WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE stock_trading;
                postgres    false            J           1247    32455379    enum_Lots_lot_status    TYPE     r   CREATE TYPE public."enum_Lots_lot_status" AS ENUM (
    'OPEN',
    'PARTIALLY REALIZED',
    'FULLY REALIZED'
);
 )   DROP TYPE public."enum_Lots_lot_status";
       public          postgres    false            �            1259    32455385    Lots    TABLE     �  CREATE TABLE public."Lots" (
    lot_id uuid NOT NULL,
    trade_id uuid NOT NULL,
    stock_name character varying(255) NOT NULL,
    lot_quantity integer NOT NULL,
    realized_quantity integer DEFAULT 0,
    realized_trade_id uuid,
    lot_status public."enum_Lots_lot_status" DEFAULT 'OPEN'::public."enum_Lots_lot_status",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Lots";
       public         heap    postgres    false    842    842            �            1259    32455371    Trades    TABLE     �  CREATE TABLE public."Trades" (
    trade_id uuid NOT NULL,
    stock_name character varying(255) NOT NULL,
    quantity integer NOT NULL,
    broker_name character varying(255) NOT NULL,
    price double precision NOT NULL,
    amount double precision NOT NULL,
    "timestamp" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Trades";
       public         heap    postgres    false            �            1259    32455396    Users    TABLE     $  CREATE TABLE public."Users" (
    user_id uuid NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false                       0    32455385    Lots 
   TABLE DATA           �   COPY public."Lots" (lot_id, trade_id, stock_name, lot_quantity, realized_quantity, realized_trade_id, lot_status, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �!                 0    32455371    Trades 
   TABLE DATA           �   COPY public."Trades" (trade_id, stock_name, quantity, broker_name, price, amount, "timestamp", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    214   �!       !          0    32455396    Users 
   TABLE DATA           [   COPY public."Users" (user_id, email, password, "createdAt", "updatedAt", name) FROM stdin;
    public          postgres    false    216   �"       t           2606    32455391    Lots Lots_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Lots"
    ADD CONSTRAINT "Lots_pkey" PRIMARY KEY (lot_id);
 <   ALTER TABLE ONLY public."Lots" DROP CONSTRAINT "Lots_pkey";
       public            postgres    false    215            r           2606    32455377    Trades Trades_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Trades_pkey" PRIMARY KEY (trade_id);
 @   ALTER TABLE ONLY public."Trades" DROP CONSTRAINT "Trades_pkey";
       public            postgres    false    214            v           2606    32481951    Users Users_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);
 C   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key";
       public            postgres    false    216            x           2606    32481953    Users Users_email_key1 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key1" UNIQUE (email);
 D   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key1";
       public            postgres    false    216            z           2606    32481971    Users Users_email_key10 
   CONSTRAINT     W   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key10" UNIQUE (email);
 E   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key10";
       public            postgres    false    216            |           2606    32481973    Users Users_email_key11 
   CONSTRAINT     W   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key11" UNIQUE (email);
 E   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key11";
       public            postgres    false    216            ~           2606    32481975    Users Users_email_key12 
   CONSTRAINT     W   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key12" UNIQUE (email);
 E   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key12";
       public            postgres    false    216            �           2606    32481955    Users Users_email_key2 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key2" UNIQUE (email);
 D   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key2";
       public            postgres    false    216            �           2606    32481957    Users Users_email_key3 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key3" UNIQUE (email);
 D   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key3";
       public            postgres    false    216            �           2606    32481959    Users Users_email_key4 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key4" UNIQUE (email);
 D   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key4";
       public            postgres    false    216            �           2606    32481961    Users Users_email_key5 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key5" UNIQUE (email);
 D   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key5";
       public            postgres    false    216            �           2606    32481963    Users Users_email_key6 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key6" UNIQUE (email);
 D   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key6";
       public            postgres    false    216            �           2606    32481965    Users Users_email_key7 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key7" UNIQUE (email);
 D   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key7";
       public            postgres    false    216            �           2606    32481967    Users Users_email_key8 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key8" UNIQUE (email);
 D   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key8";
       public            postgres    false    216            �           2606    32481969    Users Users_email_key9 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key9" UNIQUE (email);
 D   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key9";
       public            postgres    false    216            �           2606    32455402    Users Users_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (user_id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    216                   x������ � �         �   x��ѱj1����ً�$K�|[�]|w��BC��Y��A2��>ci^37�-A�8�@1��U9����!N��ϸ�.)��8bd�@v"��g�3KyC��Q�gj"հ�,��Pc	0�m1������Y����?��wM�U_+8FqnÖ�6a�^��͆�wm:�?�lL[���4`%C+���#�0[_�P�?����Wj�8��~ �^��      !   �   x���=�0 Й�ʹ~�S�$��0`��q���AE��ӛx�<�l��u�Ε��1���H�j0 �@��o��ᗧ�n/�\� d:�����_}5V�KX�Ӝ�OA��}d�m�l3:���̛�Kw�~0`�t1�4KE`Χ c��MБ ����1�     