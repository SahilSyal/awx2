#d -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-05-21 19:51
from __future__ import unicode_literals

import awx.main.fields
import awx.main.models.activity_stream
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0037_v330_remove_legacy_fact_cleanup'),
    ]

    operations = [
        migrations.AddField(
            model_name='activitystream',
            name='deleted_actor',
            field=awx.main.fields.JSONField(null=True),
        ),
    ]
