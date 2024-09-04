<?php
return array(
    'label' => array('Shopartikel', 'Ein Artikel im Shop'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'name' => array(
            'label' => array('Name', 'Wie heißt der Artikel?'),
            'inputType' => 'text'
        ),
        'images' => array(
            'label' => array('Bilder', 'Rechts auf "Neues Element" klicken", um Bilder hinzuzufügen. Das erste Bild wird auf der Übersichtsseite verwendet'),
            'inputType' => 'list',
            'fields' => array(
                'image' => array(
                    'inputType' => 'fileTree',
                    'eval' => array('filesOnly' => true),
                    'label' => array('Bild', 'Ein Bild des Artikels')
                )
            )
        ),
        'price' => array(
            'label' => array('Preis', 'Wie teuer ist der Artikel inkl. MwSt?'),
            'inputType' => 'text'

        ),
        'shortDescription' => array(
            'label' => array('Kurzbeschreibung', 'Sehr kurzer Text zur Beschreibung des Artikels für die Übersichtsseite'),
            'inputType' => 'text'
        ),
        'longDescription' => array(
            'label' => array('Beschreibung', 'Beschreibung des Artikels für die Detailseite'),
            'inputType' => 'textarea',
            'eval' => array('rte' => 'tinyMCE')
        ),
    ),
);



