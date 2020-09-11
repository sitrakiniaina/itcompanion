/*==============================================================*/
/* Nom de SGBD :  PostgreSQL 8                                  */
/* Date de création :  01/09/2020 20:00:01                      */
/*==============================================================*/


drop index ASSOCIATION_23_FK;

drop index ASSOCIATION_22_FK;

drop index ASSOCIATION_16_FK;

drop index ASSOCIATION_16_PK;

drop table ASSOCIATION_16;

drop index ASSOCIATION_25_FK;

drop index ASSOCIATION_24_FK;

drop index ASSOCIATION_22_PK;

drop table ASSOCIATION_22;

drop index ASSOCIATION_20_FK;

drop index ASSOCIATION_15_FK;

drop index ASSOCIATION_14_FK;

drop index EMPLOISDUTEMPS_PK;

drop table EMPLOIDUTEMPS;

drop index ENSEIGNANT_PK;

drop table ENSEIGNANT;

drop index ETAT_PK;

drop table ETAT;

drop index ASSOCIATION_9_FK;

drop index ASSOCIATION_21_FK;

drop index ASSOCIATION_19_FK;

drop index ASSOCIATION_4_FK;

drop index ETUDIANT_PK;

drop table ETUDIANT;

drop index ASSOCIATION_12_FK;

drop index ASSOCIATION_11_FK;

drop index EXAMEN_PK;

drop table EXAMEN;

drop index GROUPE_PK;

drop table GROUPE;

drop index MATIERE_PK;

drop table MATIERE;

drop index ASSOCIATION_17_FK;

drop index ASSOCIATION_8_FK;

drop index ASSOCIATION_6_FK;

drop index ASSOCIATION_5_FK;

drop index NOTE_PK;

drop table NOTE;

drop index PROMOTION_PK;

drop table PROMOTION;

drop index PROMOTIONPUBLICATION2_FK;

drop index PROMOTIONPUBLICATION_FK;

drop index PROMOTIONPUBLICATION_PK;

drop table PROMOTIONPUBLICATION;

drop index ASSOCIATION_13_FK;

drop index ASSOCIATION_10_FK;

drop index PUBLICATION_PK;

drop table PUBLICATION;

drop index SEMESTRE_PK;

drop table SEMESTRE;

drop index TYPEPUBLICATION_PK;

drop table TYPEPUBLICATION;

drop index UNIVERSITE_PK;

drop table UNIVERSITE;

/*==============================================================*/
/* Table : ASSOCIATION_16                                       */
/*==============================================================*/
create table ASSOCIATION_16 (
   IDSEMESTRE           INT8                 not null,
   IDMATIERE            INT8                 not null,
   IDPROMOTION          INT8                 not null,
   IDMATIERESEMESTRE    INT8                 not null,
   constraint PK_ASSOCIATION_16 primary key (IDSEMESTRE, IDMATIERE, IDPROMOTION)
);

/*==============================================================*/
/* Index : ASSOCIATION_16_PK                                    */
/*==============================================================*/
create unique index ASSOCIATION_16_PK on ASSOCIATION_16 (
IDSEMESTRE,
IDMATIERE,
IDPROMOTION
);

/*==============================================================*/
/* Index : ASSOCIATION_16_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_16_FK on ASSOCIATION_16 (
IDSEMESTRE
);

/*==============================================================*/
/* Index : ASSOCIATION_22_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_22_FK on ASSOCIATION_16 (
IDMATIERE
);

/*==============================================================*/
/* Index : ASSOCIATION_23_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_23_FK on ASSOCIATION_16 (
IDPROMOTION
);

/*==============================================================*/
/* Table : ASSOCIATION_22                                       */
/*==============================================================*/
create table ASSOCIATION_22 (
   IDMATIERE            INT8                 not null,
   IDENSEIGNANT         INT8                 not null,
   IDENSEIGNANTMATIERE  CHAR(10)             not null,
   constraint PK_ASSOCIATION_22 primary key (IDMATIERE, IDENSEIGNANT)
);

/*==============================================================*/
/* Index : ASSOCIATION_22_PK                                    */
/*==============================================================*/
create unique index ASSOCIATION_22_PK on ASSOCIATION_22 (
IDMATIERE,
IDENSEIGNANT
);

/*==============================================================*/
/* Index : ASSOCIATION_24_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_24_FK on ASSOCIATION_22 (
IDMATIERE
);

/*==============================================================*/
/* Index : ASSOCIATION_25_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_25_FK on ASSOCIATION_22 (
IDENSEIGNANT
);

/*==============================================================*/
/* Table : EMPLOIDUTEMPS                                        */
/*==============================================================*/
create table EMPLOIDUTEMPS (
   IDEMPLOISDUTEMPS     INT8                 not null,
   IDMATIERE            INT8                 not null,
   IDGROUPE             INT8                 not null,
   IDSEMESTRE           INT8                 not null,
   DATEDEBUT            DATE                 null,
   DATEFIN              DATE                 null,
   HEUREDEBUT           TIME                 null,
   HEUREFIN             TIME                 null,
   JOUR                 VARCHAR(20)          null,
   constraint PK_EMPLOIDUTEMPS primary key (IDEMPLOISDUTEMPS)
);

/*==============================================================*/
/* Index : EMPLOISDUTEMPS_PK                                    */
/*==============================================================*/
create unique index EMPLOISDUTEMPS_PK on EMPLOIDUTEMPS (
IDEMPLOISDUTEMPS
);

/*==============================================================*/
/* Index : ASSOCIATION_14_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_14_FK on EMPLOIDUTEMPS (
IDSEMESTRE
);

/*==============================================================*/
/* Index : ASSOCIATION_15_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_15_FK on EMPLOIDUTEMPS (
IDMATIERE
);

/*==============================================================*/
/* Index : ASSOCIATION_20_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_20_FK on EMPLOIDUTEMPS (
IDGROUPE
);

/*==============================================================*/
/* Table : ENSEIGNANT                                           */
/*==============================================================*/
create table ENSEIGNANT (
   IDENSEIGNANT         INT8                 not null,
   NOM                  VARCHAR(100)         null,
   PRENOM               VARCHAR(100)         null,
   DATENAISSANCE        DATE                 null,
   CODE                 VARCHAR(20)          null,
   constraint PK_ENSEIGNANT primary key (IDENSEIGNANT)
);

/*==============================================================*/
/* Index : ENSEIGNANT_PK                                        */
/*==============================================================*/
create unique index ENSEIGNANT_PK on ENSEIGNANT (
IDENSEIGNANT
);

/*==============================================================*/
/* Table : ETAT                                                 */
/*==============================================================*/
create table ETAT (
   IDETAT               INT8                 not null,
   CODE                 VARCHAR(20)          null,
   LIBELLE              VARCHAR(100)         null,
   constraint PK_ETAT primary key (IDETAT)
);

/*==============================================================*/
/* Index : ETAT_PK                                              */
/*==============================================================*/
create unique index ETAT_PK on ETAT (
IDETAT
);

/*==============================================================*/
/* Table : ETUDIANT                                             */
/*==============================================================*/
create table ETUDIANT (
   IDETUDIANT           INT8                 not null,
   IDSEMESTRE           INT8                 not null,
   IDUNIVERSITE         INT8                 not null,
   IDGROUPE             INT8                 not null,
   IDPROMOTION          INT8                 not null,
   CODE                 VARCHAR(20)          not null,
   NOM                  VARCHAR(100)         null,
   PRENOM               VARCHAR(100)         null,
   DATENAISSANCE        DATE                 null,
   constraint PK_ETUDIANT primary key (IDETUDIANT)
);

/*==============================================================*/
/* Index : ETUDIANT_PK                                          */
/*==============================================================*/
create unique index ETUDIANT_PK on ETUDIANT (
IDETUDIANT
);

/*==============================================================*/
/* Index : ASSOCIATION_4_FK                                     */
/*==============================================================*/
create  index ASSOCIATION_4_FK on ETUDIANT (
IDPROMOTION
);

/*==============================================================*/
/* Index : ASSOCIATION_19_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_19_FK on ETUDIANT (
IDGROUPE
);

/*==============================================================*/
/* Index : ASSOCIATION_21_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_21_FK on ETUDIANT (
IDSEMESTRE
);

/*==============================================================*/
/* Index : ASSOCIATION_9_FK                                     */
/*==============================================================*/
create  index ASSOCIATION_9_FK on ETUDIANT (
IDUNIVERSITE
);

/*==============================================================*/
/* Table : EXAMEN                                               */
/*==============================================================*/
create table EXAMEN (
   IDEXAMEN             INT8                 not null,
   IDMATIERE            INT8                 not null,
   IDPROMOTION          INT8                 not null,
   DATEDEBUT            DATE                 null,
   DATEFIN              DATE                 null,
   HEUREDEBUT           TIME                 null,
   HEUREFIN             TIME                 null,
   constraint PK_EXAMEN primary key (IDEXAMEN)
);

/*==============================================================*/
/* Index : EXAMEN_PK                                            */
/*==============================================================*/
create unique index EXAMEN_PK on EXAMEN (
IDEXAMEN
);

/*==============================================================*/
/* Index : ASSOCIATION_11_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_11_FK on EXAMEN (
IDMATIERE
);

/*==============================================================*/
/* Index : ASSOCIATION_12_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_12_FK on EXAMEN (
IDPROMOTION
);

/*==============================================================*/
/* Table : GROUPE                                               */
/*==============================================================*/
create table GROUPE (
   IDGROUPE             INT8                 not null,
   CODE                 VARCHAR(20)          null,
   LIBELLE              VARCHAR(100)         null,
   constraint PK_GROUPE primary key (IDGROUPE)
);

/*==============================================================*/
/* Index : GROUPE_PK                                            */
/*==============================================================*/
create unique index GROUPE_PK on GROUPE (
IDGROUPE
);

/*==============================================================*/
/* Table : MATIERE                                              */
/*==============================================================*/
create table MATIERE (
   IDMATIERE            INT8                 not null,
   CODE                 VARCHAR(20)          null,
   LIBELLE              VARCHAR(100)         null,
   COEFFICIENT          INT4                 null,
   constraint PK_MATIERE primary key (IDMATIERE)
);

/*==============================================================*/
/* Index : MATIERE_PK                                           */
/*==============================================================*/
create unique index MATIERE_PK on MATIERE (
IDMATIERE
);

/*==============================================================*/
/* Table : NOTE                                                 */
/*==============================================================*/
create table NOTE (
   IDNOTE               INT8                 not null,
   IDETUDIANT           INT8                 not null,
   IDSEMESTRE           INT8                 not null,
   IDMATIERE            INT8                 not null,
   IDETAT               INT8                 not null,
   NOTE                 DECIMAL              null,
   DATE                 DATE                 null,
   constraint PK_NOTE primary key (IDNOTE)
);

/*==============================================================*/
/* Index : NOTE_PK                                              */
/*==============================================================*/
create unique index NOTE_PK on NOTE (
IDNOTE
);

/*==============================================================*/
/* Index : ASSOCIATION_5_FK                                     */
/*==============================================================*/
create  index ASSOCIATION_5_FK on NOTE (
IDETUDIANT
);

/*==============================================================*/
/* Index : ASSOCIATION_6_FK                                     */
/*==============================================================*/
create  index ASSOCIATION_6_FK on NOTE (
IDMATIERE
);

/*==============================================================*/
/* Index : ASSOCIATION_8_FK                                     */
/*==============================================================*/
create  index ASSOCIATION_8_FK on NOTE (
IDETAT
);

/*==============================================================*/
/* Index : ASSOCIATION_17_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_17_FK on NOTE (
IDSEMESTRE
);

/*==============================================================*/
/* Table : PROMOTION                                            */
/*==============================================================*/
create table PROMOTION (
   IDPROMOTION          INT8                 not null,
   LIBELLE              VARCHAR(100)         not null,
   DATEDEBUT            DATE                 null,
   DATEFIN              DATE                 null,
   GROUPEFB             VARCHAR(1)           not null,
   constraint PK_PROMOTION primary key (IDPROMOTION)
);

/*==============================================================*/
/* Index : PROMOTION_PK                                         */
/*==============================================================*/
create unique index PROMOTION_PK on PROMOTION (
IDPROMOTION
);

/*==============================================================*/
/* Table : PROMOTIONPUBLICATION                                 */
/*==============================================================*/
create table PROMOTIONPUBLICATION (
   IDPROMOTION          INT8                 not null,
   IDPUBLICATION        INT8                 not null,
   constraint PK_PROMOTIONPUBLICATION primary key (IDPROMOTION, IDPUBLICATION)
);

/*==============================================================*/
/* Index : PROMOTIONPUBLICATION_PK                              */
/*==============================================================*/
create unique index PROMOTIONPUBLICATION_PK on PROMOTIONPUBLICATION (
IDPROMOTION,
IDPUBLICATION
);

/*==============================================================*/
/* Index : PROMOTIONPUBLICATION_FK                              */
/*==============================================================*/
create  index PROMOTIONPUBLICATION_FK on PROMOTIONPUBLICATION (
IDPROMOTION
);

/*==============================================================*/
/* Index : PROMOTIONPUBLICATION2_FK                             */
/*==============================================================*/
create  index PROMOTIONPUBLICATION2_FK on PROMOTIONPUBLICATION (
IDPUBLICATION
);

/*==============================================================*/
/* Table : PUBLICATION                                          */
/*==============================================================*/
create table PUBLICATION (
   IDPUBLICATION        INT8                 not null,
   IDETAT               INT8                 not null,
   IDTYPE               INT8                 not null,
   TITRE                VARCHAR(200)         not null,
   DESCRIPTION          VARCHAR(1)           null,
   DATEDEBUT            DATE                 null,
   HEUREDEBUT           TIME                 null,
   DATEFIN              DATE                 null,
   HEUREFIN             TIME                 null,
   constraint PK_PUBLICATION primary key (IDPUBLICATION)
);

/*==============================================================*/
/* Index : PUBLICATION_PK                                       */
/*==============================================================*/
create unique index PUBLICATION_PK on PUBLICATION (
IDPUBLICATION
);

/*==============================================================*/
/* Index : ASSOCIATION_10_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_10_FK on PUBLICATION (
IDETAT
);

/*==============================================================*/
/* Index : ASSOCIATION_13_FK                                    */
/*==============================================================*/
create  index ASSOCIATION_13_FK on PUBLICATION (
IDTYPE
);

/*==============================================================*/
/* Table : SEMESTRE                                             */
/*==============================================================*/
create table SEMESTRE (
   IDSEMESTRE           INT8                 not null,
   CODE                 VARCHAR(20)          null,
   LIBELLE              VARCHAR(100)         null,
   constraint PK_SEMESTRE primary key (IDSEMESTRE)
);

/*==============================================================*/
/* Index : SEMESTRE_PK                                          */
/*==============================================================*/
create unique index SEMESTRE_PK on SEMESTRE (
IDSEMESTRE
);

/*==============================================================*/
/* Table : TYPEPUBLICATION                                      */
/*==============================================================*/
create table TYPEPUBLICATION (
   IDTYPE               INT8                 not null,
   CODE                 VARCHAR(20)          null,
   LIBELLE              VARCHAR(100)         null,
   constraint PK_TYPEPUBLICATION primary key (IDTYPE)
);

/*==============================================================*/
/* Index : TYPEPUBLICATION_PK                                   */
/*==============================================================*/
create unique index TYPEPUBLICATION_PK on TYPEPUBLICATION (
IDTYPE
);

/*==============================================================*/
/* Table : UNIVERSITE                                           */
/*==============================================================*/
create table UNIVERSITE (
   IDUNIVERSITE         INT8                 not null,
   LIBELLE              VARCHAR(100)         null,
   ADRESSE              VARCHAR(100)         null,
   LON                  NUMERIC              null,
   LAT                  NUMERIC              null,
   constraint PK_UNIVERSITE primary key (IDUNIVERSITE)
);

/*==============================================================*/
/* Index : UNIVERSITE_PK                                        */
/*==============================================================*/
create unique index UNIVERSITE_PK on UNIVERSITE (
IDUNIVERSITE
);

alter table ASSOCIATION_16
   add constraint FK_ASSOCIAT_ASSOCIATI_SEMESTRE foreign key (IDSEMESTRE)
      references SEMESTRE (IDSEMESTRE)
      on delete restrict on update restrict;

alter table ASSOCIATION_16
   add constraint FK_ASSOCIAT_ASSOCIATI_MATIERE foreign key (IDMATIERE)
      references MATIERE (IDMATIERE)
      on delete restrict on update restrict;

alter table ASSOCIATION_16
   add constraint FK_ASSOCIAT_ASSOCIATI_PROMOTIO foreign key (IDPROMOTION)
      references PROMOTION (IDPROMOTION)
      on delete restrict on update restrict;

alter table ASSOCIATION_22
   add constraint FK_ASSOCIAT_ASSOCIATI_MATIERE foreign key (IDMATIERE)
      references MATIERE (IDMATIERE)
      on delete restrict on update restrict;

alter table ASSOCIATION_22
   add constraint FK_ASSOCIAT_ASSOCIATI_ENSEIGNA foreign key (IDENSEIGNANT)
      references ENSEIGNANT (IDENSEIGNANT)
      on delete restrict on update restrict;

alter table EMPLOIDUTEMPS
   add constraint FK_EMPLOIDU_ASSOCIATI_SEMESTRE foreign key (IDSEMESTRE)
      references SEMESTRE (IDSEMESTRE)
      on delete restrict on update restrict;

alter table EMPLOIDUTEMPS
   add constraint FK_EMPLOIDU_ASSOCIATI_MATIERE foreign key (IDMATIERE)
      references MATIERE (IDMATIERE)
      on delete restrict on update restrict;

alter table EMPLOIDUTEMPS
   add constraint FK_EMPLOIDU_ASSOCIATI_GROUPE foreign key (IDGROUPE)
      references GROUPE (IDGROUPE)
      on delete restrict on update restrict;

alter table ETUDIANT
   add constraint FK_ETUDIANT_ASSOCIATI_PROMOTIO foreign key (IDPROMOTION)
      references PROMOTION (IDPROMOTION)
      on delete restrict on update restrict;

alter table ETUDIANT
   add constraint FK_ETUDIANT_ASSOCIATI_GROUPE foreign key (IDGROUPE)
      references GROUPE (IDGROUPE)
      on delete restrict on update restrict;

alter table ETUDIANT
   add constraint FK_ETUDIANT_ASSOCIATI_SEMESTRE foreign key (IDSEMESTRE)
      references SEMESTRE (IDSEMESTRE)
      on delete restrict on update restrict;

alter table ETUDIANT
   add constraint FK_ETUDIANT_ASSOCIATI_UNIVERSI foreign key (IDUNIVERSITE)
      references UNIVERSITE (IDUNIVERSITE)
      on delete restrict on update restrict;

alter table EXAMEN
   add constraint FK_EXAMEN_ASSOCIATI_MATIERE foreign key (IDMATIERE)
      references MATIERE (IDMATIERE)
      on delete restrict on update restrict;

alter table EXAMEN
   add constraint FK_EXAMEN_ASSOCIATI_PROMOTIO foreign key (IDPROMOTION)
      references PROMOTION (IDPROMOTION)
      on delete restrict on update restrict;

alter table NOTE
   add constraint FK_NOTE_ASSOCIATI_SEMESTRE foreign key (IDSEMESTRE)
      references SEMESTRE (IDSEMESTRE)
      on delete restrict on update restrict;

alter table NOTE
   add constraint FK_NOTE_ASSOCIATI_ETUDIANT foreign key (IDETUDIANT)
      references ETUDIANT (IDETUDIANT)
      on delete restrict on update restrict;

alter table NOTE
   add constraint FK_NOTE_ASSOCIATI_MATIERE foreign key (IDMATIERE)
      references MATIERE (IDMATIERE)
      on delete restrict on update restrict;

alter table NOTE
   add constraint FK_NOTE_ASSOCIATI_ETAT foreign key (IDETAT)
      references ETAT (IDETAT)
      on delete restrict on update restrict;

alter table PROMOTIONPUBLICATION
   add constraint FK_PROMOTIO_PROMOTION_PROMOTIO foreign key (IDPROMOTION)
      references PROMOTION (IDPROMOTION)
      on delete restrict on update restrict;

alter table PROMOTIONPUBLICATION
   add constraint FK_PROMOTIO_PROMOTION_PUBLICAT foreign key (IDPUBLICATION)
      references PUBLICATION (IDPUBLICATION)
      on delete restrict on update restrict;

alter table PUBLICATION
   add constraint FK_PUBLICAT_ASSOCIATI_ETAT foreign key (IDETAT)
      references ETAT (IDETAT)
      on delete restrict on update restrict;

alter table PUBLICATION
   add constraint FK_PUBLICAT_ASSOCIATI_TYPEPUBL foreign key (IDTYPE)
      references TYPEPUBLICATION (IDTYPE)
      on delete restrict on update restrict;

