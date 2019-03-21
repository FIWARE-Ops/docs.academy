<hr class="core" style="display:none"/>
<h2>Draco  - Data Persistence using Apache NIFI</h2>

[![](https://nexus.lab.fiware.org/repository/raw/public/badges/chapters/core.svg)](https://www.fiware.org/developers/catalogue/)
[![fiware-sth-comet](https://nexus.lab.fiware.org/repository/raw/public/badges/stackoverflow/sth-comet.svg)](http://stackoverflow.com/questions/tagged/fiware-sth-comet)

Draco is a connector in charge of persisting context data sources into other third-party databases and storage systems,
creating a historical view of the context. Internally, Draco is based on Apache NiFi. [NiFi](https://nifi.apache.org) is
a popular framework for data management and processing from multiple sources.

Draco plays the role of a connector between the Orion Context Broker (which is an
[NGSI](https://swagger.lab.fiware.org/?url=https://raw.githubusercontent.com/Fiware/specifications/master/OpenAPI/ngsiv2/ngsiv2-openapi.json)
source of data) source of data) and a wide range of external systems such as MySQL, MongoDB etc. You can use Draco if
you need to process and persist context data so that you can keep a historical record. Draco can also be used to filter
and repost context data back into Orion.

![](https://fiware.github.io/academy/img/books.png) [Documentation](https://fiware-draco.rtfd.io)

<h3>Step-by-Step Tutorials</h3>

Data Persistence using Draco is described in the following step-by-step tutorial:

-   [FIWARE 302: Persisting Context Data using Apache NIFI](https://fiware-tutorials.readthedocs.io/en/latest/historic-context-nifi)
    (MongoDB, MySQL, PostgreSQL)
