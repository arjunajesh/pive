# Generated by Django 4.2.3 on 2023-07-22 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0008_alter_product_drink_alter_productstoreinfo_store'),
    ]

    operations = [
        migrations.AddField(
            model_name='drink',
            name='featured',
            field=models.BooleanField(default=False),
        ),
    ]
