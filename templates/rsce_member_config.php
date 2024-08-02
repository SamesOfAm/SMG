<?php
return array(
    'label' => array('Mitglied', 'Ein Mitglied im Föderverein'),
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
            'label' => array('Name', 'Der Name des Mitglieds'),
            'inputType' => 'text'
        ),
        'logo' => array(
            'label' => array('Logo (optional)', 'Bei Unternehmen: Das Logo des Unternehmens (frei lassen falls nicht zutreffend)'),
            'eval' => array('filesOnly' => true),
            'inputType' => 'fileTree'
        ),
        'link' => array(
            'label' => array('Link (optional)', 'Link zur Website des Unternehmens / der Person'),
            'inputType' => 'url'
        ),
        'description' => array(
            'label' => array('Text', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea'
        ),
    ),
);
