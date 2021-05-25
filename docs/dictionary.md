---
id: dictionary
title: Dicionário de Dados
---

## Provincias

A tabela a seguir lista as províncias e os respectivos códigos de designação no OpenLDR. Cada Provincia é representada por uma sequencia de dois carateres numéricos.

| Provincia        | Código OpenLDR | Código do MISAU (SISMA) |
| ---------------- | :------------: | :---------------------: |
| Niassa           |       01       |                         |
| Cabo Delgado     |       02       |                         |
| Nampula          |       03       |                         |
| Zambezia         |       04       |                         |
| Tete             |       05       |                         |
| Manica           |       06       |                         |
| Sofala           |       07       |                         |
| Inhambane        |       08       |                         |
| Gaza             |       09       |                         |
| Maputo Provincia |       10       |                         |
| Maputo Cidade    |       11       |                         |

`curl <dominio>/provinces` através desta rota pode-se obter a lista com cada província associada ao respectivo código.

```json
[
  {
    "ProvinceCode": "01",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Niassa"
  },
  {
    "ProvinceCode": "02",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Cabo Delgado"
  },
  {
    "ProvinceCode": "03",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Nampula"
  },
  {
    "ProvinceCode": "04",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Zambezia"
  },
  {
    "ProvinceCode": "05",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Tete"
  },
  {
    "ProvinceCode": "06",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Manica"
  },
  {
    "ProvinceCode": "07",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Sofala"
  },
  {
    "ProvinceCode": "08",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Inhambane"
  },
  {
    "ProvinceCode": "09",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Gaza"
  },
  {
    "ProvinceCode": "10",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Maputo Provincia"
  },
  {
    "ProvinceCode": "11",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceName": "Maputo Cidade"
  }
]
```

## Distritos

Dentro do Open LDR os distritos são designados por dois caracteres alfanuméricos (Letra+Número).

| Distrito   | Código OpenLDR | Código do MISAU (SISMA) |
| ---------- | :------------: | :---------------------: |
| Maxixe     |       F1       |                         |
| Mandlakazi |       C2       |                         |
| Malema     |       K6       |                         |
| ...        |      ...       |           ...           |

`curl <dominio>/districts`

Esta rota retorna a lista de todos os Distritos agrupados por Província.

```json
[
  {
    "DistrictCode": "F1",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceCode": "08",
    "ProvinceName": "Inhambane",
    "DistrictName": "Maxixe"
  },
  {
    "DistrictCode": "C9",
    "CountryCode": "MZ",
    "CountryName": "Mozambique",
    "ProvinceCode": "09",
    "ProvinceName": "Gaza",
    "DistrictName": "Mandlakazi"
  },
  ...
]
```

`DistrictCode` é o código do Distrito

`CountryCode` é o código do país

`ContryName` é o nome do País

`ProvinceName` nome da Provincia

`DistrictName` é o nome do Distrito

## Unidade Sanitária

AS Unidades Sanitárias pedem ser consultadas usando o nome, o código da Unidade Sanitária ou através do nome ou código distrito.

`curl <dominio>/clinic/<código ou nome da unidade sanitária>`

Exemplo: `curl <dominio>/clinic/CS Sambula` neste caso consultamos a a Unidade Sanitaria `CS Samula`.

```json
{
  "DateTimeStamp": "1899-12-30T00:00:00.000Z",
  "VersionStamp": "",
  "FacilityCode": "SAMBL",
  "Description": "CS Sambula",
  "FacilityType": "H",
  "CountryCode": "MZ",
  "ProvinceCode": "01",
  "RegionCode": "",
  "DistrictCode": "N1",
  "SubDistrictCode": "",
  "LattLong": null,
  "HFStatus": 1,
  "HealthCareID": "MZ0100N1SAMBL",
  "FacilityNationalCode": "1010114",
  "HealthcareCountryCode": "MZ",
  "HealthcareProvinceCode": "MZ01",
  "HealthcareDistrictCode": "MZ0100N1",
  "CountryName": "Mozambique",
  "CountryLattLong": null,
  "ProvinceName": "Niassa",
  "ProvinceLattLong": null,
  "DistrictName": "Distrito de Lichinga",
  "DistrictLattLong": null
}
```

Também pode ser feita a consulta de todas as US de um determinado distrito usando o nome ou código do distrito.

`curl <dominio>/clinics/district/<Nome ou código do distrito>`

` curl <dominio>/clinics/district/Matola` - Neste exemplo listamos todas as Unidades Sanitárias do Distrito da `Matola`.

```json
    [
  {
    "DateTimeStamp": "1899-12-30T00:00:00.000Z",
    "VersionStamp": "",
    "FacilityCode": "MACH",
    "Description": "CS Machava II (DLink)",
    "FacilityType": "H",
    "CountryCode": "MZ",
    "ProvinceCode": "10",
    "RegionCode": "",
    "DistrictCode": "J1",
    "SubDistrictCode": "",
    "LattLong": {...},
    "HFStatus": 1,
    "HealthCareID": "MZ1000J1MACH",
    "FacilityNationalCode": "1100107",
    "HealthcareCountryCode": "MZ",
    "HealthcareProvinceCode": "MZ10",
    "HealthcareDistrictCode": "MZ1000J1",
    "CountryName": "Mozambique",
    "CountryLattLong": null,
    "ProvinceName": "Maputo Provincia",
    "ProvinceLattLong": null,
    "DistrictName": "Matola",
    "DistrictLattLong": null
  },
  {
    "DateTimeStamp": "1899-12-30T00:00:00.000Z",
    "VersionStamp": "",
    "FacilityCode": "MACH1",
    "Description": "CS Machava I",
    "FacilityType": "H",
    "CountryCode": "MZ",
    "ProvinceCode": "10",
    "RegionCode": "",
    "DistrictCode": "J1",
    "SubDistrictCode": "",
    "LattLong": {...},
    "HFStatus": 1,
    "HealthCareID": "MZ1000J1MACH1",
    "FacilityNationalCode": "1100121",
    "HealthcareCountryCode": "MZ",
    "HealthcareProvinceCode": "MZ10",
    "HealthcareDistrictCode": "MZ1000J1",
    "CountryName": "Mozambique",
    "CountryLattLong": null,
    "ProvinceName": "Maputo Provincia",
    "ProvinceLattLong": null,
    "DistrictName": "Matola",
    "DistrictLattLong": null
  },...]
```

Da mesma forma pode-se extrair as US por Província, usando o nome ou código da Província.

`curl <dominio>/clinics/province/< código ou nome da provincia> `

`curl <dominio>/clinics/province/Zambezia` Neste exemplo listamos as Unidades Sanitárias da província da Zambézia.

```json
[
  {
    "DateTimeStamp": "1899-12-30T00:00:00.000Z",
    "VersionStamp": "",
    "FacilityCode": "NAMAT",
    "Description": "Namaita",
    "FacilityType": "H",
    "CountryCode": "MZ",
    "ProvinceCode": "04",
    "RegionCode": "",
    "DistrictCode": "",
    "SubDistrictCode": "",
    "LattLong": null,
    "HFStatus": 0,
    "HealthCareID": "MZ040000NAMAT",
    "FacilityNationalCode": "",
    "HealthcareCountryCode": "MZ",
    "HealthcareProvinceCode": "MZ04",
    "HealthcareDistrictCode": "MZ040000",
    "CountryName": "Mozambique",
    "CountryLattLong": null,
    "ProvinceName": "Zambezia",
    "ProvinceLattLong": null,
    "DistrictName": null,
    "DistrictLattLong": null
  },...]
```
