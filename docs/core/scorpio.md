<hr class="core" style="display:none"/>
<h2>Scorpio - Linked Data Context Broker</h2>

[![](https://nexus.lab.fiware.org/repository/raw/public/badges/chapters/core.svg)](https://github.com/FIWARE/catalogue/blob/master/core/README.md)
[![fiware](https://nexus.lab.fiware.org/repository/raw/public/badges/stackoverflow/fiware.svg)](https://stackoverflow.com/questions/tagged/fiware)

Scorpio implements [NGSI-LD](https://www.etsi.org/deliver/etsi_gs/CIM/001_099/009/01.01.01_60/gs_CIM009v010101p.pdf),
which is the evolution of NGSI v2 and previous versions going back to the OMA NGSI context interfaces. This standardized
version is based on the NGSI-LD specification published by the ETSI Industry Specification Group on Context Information
Management.

Scorpio supports different deployment configurations, which support scalability and extension of scenarios in an
evolutionary way. For example two separate deployments can be combined or for scalability reasons different brokers can
be used – completely transparent to Context Consumers that can still use a single point of access. Scorpio also
implements the optional temporal NGSI-LD interface, so any updated context information can automatically be made
available as history information through the temporal interface.

![](https://fiware-ops.github.io/docs.academy/img/books.png) [Documentation](https://scorpio.rtfd.io)

<h3>Step-by-Step Tutorials</h3>

Techniques for working with Linked Data using Scorpio are described in the following step-by-step tutorials:

-   [FIWARE 601: Introduction to Linked Data](https://fiware-tutorials.readthedocs.io/en/latest/linked-data)
-   [FIWARE 602: Linked Data Relationships and Data Models](https://fiware-tutorials.readthedocs.io/en/latest/relationships-linked-data)
