<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="3.0">

<xsl:output method="xml" omit-xml-declaration="no" indent="yes"/> 
    
    <xsl:template match="/concesionario">
        <Vehiculos>
            <xsl:for-each select="coche">
                <coche>
                    <modelo><xsl:value-of select="marca" /></modelo>
                    <matricula><xsl:value-of select="@matricula" /></matricula>
                    <metalizado color="{color}"><xsl:value-of select="color/@metalizado" /></metalizado>
                </coche>
            </xsl:for-each>
        </Vehiculos>
    </xsl:template>
</xsl:stylesheet>
